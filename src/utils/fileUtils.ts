export const saveMarkdownFile = (
  fileName: string,
  content: string,
  folder?: string
) => {
  const formattedFileName = `${folder ? `${folder}/` : ""}${fileName}.md`;
  const fileContent = `---\nTitle: ${fileName}\n---\n\n${content}`;

  console.log("Saving File:", formattedFileName);
  console.log("Content:\n", fileContent);

  return { fileName: formattedFileName, content: fileContent };
};
