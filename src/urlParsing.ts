/**
 * 任務：實作一個函式 `parseUrl`，嘗試用 URL 方法，解析網址並 return 其組成部分。
 *
 * 範例：
 * parseUrl('https://www.example.com/path') 應該回傳
 * {
 *   protocol: 'https:',
 *   hostname: 'www.example.com',
 *   path: '/path'
 * }
 *
 * @param url - 一個需要被解析的 URL
 * @returns - 回傳一個物件，包含 protocol、hostname 和 path
 */
interface UrlParts {
  protocol: string;
  hostname: string;
  path: string;
}

export function parseUrl(url: string): UrlParts {
  // 請在此處寫下你的程式碼
  const urlObj = new URL(url);
  return {
    protocol: urlObj.protocol,
    hostname: urlObj.hostname,
    path: urlObj.pathname,
  };
}

// URL 是內建的 JavaScript 類別，用於解析和操作 URL。它有一些有用的屬性，例如 protocol、hostname 和 pathname，可以用來解析網址。
