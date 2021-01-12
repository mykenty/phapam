import * as fs from "fs";
import * as path from "path";
import { version } from "../packages/theme/package.json";

const packagesDir = path.resolve(__dirname, "../packages/");
const files = fs.readdirSync(packagesDir);

files.forEach((pkgName) => {
  if (pkgName.charAt(0) === "." || pkgName === "theme") return;

  const desc = `${pkgName} plugin for vuepress-theme-hope`;
  const pkgPath = path.join(packagesDir, pkgName, "package.json");

  // generate package.json
  if (!fs.existsSync(pkgPath)) {
    const pkgJSON = {
      name: `@mr-hope/vuepress-plugin-${pkgName}`,
      version,
      description: desc,
      main: "lib/index.js",
      types: "types/index.d.ts",
      publishConfig: {
        access: "public",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/Mister-Hope/vuepress-theme-hope.git",
        directory: `packages/${pkgName}`,
      },
      keywords: [
        "vuepress-plugin",
        "vuepress",
        pkgName,
        "vuepress-theme-hope",
        "mr-hope",
      ],
      author: {
        email: "zhangbowang1998@gmail.com",
        name: "Đức Thành",
        url: "https://mrhope.site",
      },
      license: "MIT",
      bugs: {
        url: "https://github.com/Mister-Hope/vuepress-theme-hope/issues",
      },
      homepage: `https://github.com/Mister-Hope/vuepress-theme-hope/packages/${pkgName}#readme`,
      dependencies: {
        "@mr-hope/vuepress-types": `^${version}`,
      },
    };

    fs.writeFileSync(pkgPath, `${JSON.stringify(pkgJSON, null, 2)}\n`);
  }

  const readmePath = path.join(packagesDir, pkgName, "readme.md");

  // generate readme.md
  if (!fs.existsSync(readmePath))
    fs.writeFileSync(
      readmePath,
      `# @mr-hope/vuepress-plugin-${pkgName}

[![Version](https://img.shields.io/npm/v/@mr-hope/vuepress-plugin-${pkgName}.svg?style=flat-square&logo=npm) ![Downloads](https://img.shields.io/npm/dm/@mr-hope/vuepress-plugin-${pkgName}.svg?style=flat-square&logo=npm) ![Size](https://img.shields.io/bundlephobia/min/@mr-hope/vuepress-plugin-${pkgName}?style=flat-square&logo=npm)](https://www.npmjs.com/package/@mr-hope/vuepress-plugin-${pkgName})

${desc}.

## Usage

\`\`\`bash
npm i @mr-hope/vuepress-plugin-${pkgName}
\`\`\`

---

vuepress-theme-hope 的 ${pkgName} 插件。

## 使用

\`\`\`bash
npm i @mr-hope/vuepress-plugin-${pkgName}
\`\`\`
`
    );
});
