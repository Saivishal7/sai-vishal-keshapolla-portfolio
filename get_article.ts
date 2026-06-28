import dotenv from 'dotenv';
dotenv.config();

async function main() {
  try {
    const url = 'https://dev.to/api/articles?username=naman_2004';
    console.log(`Fetching dev.to articles for user naman_2004 from: ${url}`);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const articles: any[] = await res.json();
    console.log(`Found ${articles.length} articles.`);
    for (const art of articles) {
      console.log(`- Title: ${art.title}`);
      console.log(`  URL: ${art.url}`);
      console.log(`  Slug: ${art.slug}`);
      if (art.title.toLowerCase().includes("codolio") || art.title.toLowerCase().includes("statistics")) {
        console.log(`\n--- FOUND MATCHING ARTICLE: ${art.title} ---`);
        console.log(`Raw markdown of this article:`);
        const detailRes = await fetch(`https://dev.to/api/articles/${art.id}`);
        const detailData: any = await detailRes.json();
        const md = detailData.body_markdown || "";
        const codeBlocks = md.match(/```[\s\S]*?```/g) || [];
        console.log(`Found ${codeBlocks.length} code blocks.`);
        codeBlocks.forEach((block: string, index: number) => {
          console.log(`\n--- Code Block ${index + 1} ---`);
          console.log(block);
        });
      }
    }
    return;
  } catch (err) {
    console.error("Error fetching article:", err);
  }
}

main();
