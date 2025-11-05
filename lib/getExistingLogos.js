// Helper: dynamically load all existing logos from /public/[dir]
import fs from "fs";
import path from "path";

function getExistingLogos(dir) {
  const folderPath = path.join(process.cwd(), "public", dir);
  const logos = [];

  if (!fs.existsSync(folderPath)) return logos; // Folder doesn't exist

  // Get all files that match logo-[number].png or .svg
  const files = fs.readdirSync(folderPath)
    .filter(file => /^logo-\d+\.(png|svg)$/i.test(file))
    .sort((a, b) => {
      const aNum = parseInt(a.match(/\d+/)?.[0] || "0", 10);
      const bNum = parseInt(b.match(/\d+/)?.[0] || "0", 10);
      return aNum - bNum;
    });

  for (const file of files) {
    logos.push({
      logo: `/${dir}/${file}`,
      url: "#",
    });
  }

  return logos;
}

export default getExistingLogos;