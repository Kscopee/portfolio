import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const contentRoot = path.resolve('src/content');
const supportedExtensions = new Set(['.json', '.md', '.mdx', '.yaml', '.yml']);

async function findContentFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return findContentFiles(entryPath);
      }

      return supportedExtensions.has(path.extname(entry.name)) ? [entryPath] : [];
    }),
  );

  return nestedFiles.flat();
}

const files = await findContentFiles(contentRoot);
const missingItems = [];

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const lines = source.split(/\r?\n/u);

  lines.forEach((line, index) => {
    const markerIndex = line.indexOf('TODO:');
    if (markerIndex === -1) return;

    const message = line
      .slice(markerIndex)
      .replace(/[",']+\s*[,}\]]?\s*$/u, '')
      .trim();

    missingItems.push({
      file: path.relative(process.cwd(), file),
      line: index + 1,
      message,
    });
  });
}

if (missingItems.length > 0) {
  console.error(`Content check failed: ${missingItems.length} item(s) still need content.\n`);

  for (const item of missingItems) {
    console.error(`- ${item.file}:${item.line} — ${item.message}`);
  }

  process.exitCode = 1;
} else {
  console.log(`Content check passed: ${files.length} content file(s), no TODO markers found.`);
}
