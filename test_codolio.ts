async function main() {
  const username = "ICPC2628019";
  const url = `https://codolio.com/profile/${username}`;
  console.log(`Fetching public HTML to search for statistics: ${url}`);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9",
      }
    });
    const html = await res.text();
    
    // Let's search for "platform" or "totalQuestionCounts" or LeetCode
    console.log("Searching for keywords inside the HTML...");
    const regexList = [
      /totalQuestionCounts/gi,
      /easyQuestionCounts/gi,
      /mediumQuestionCounts/gi,
      /hardQuestionCounts/gi,
      /platformProfiles/gi,
      /leetcode/gi,
      /gfg/gi
    ];
    
    for (const rx of regexList) {
      const match = html.match(rx);
      console.log(`Pattern ${rx}: found ${match ? match.length : 0} matches.`);
    }

    // Let's search for the raw Next.js self.__next_f.push content and print segments that have platform profiles
    const nextFMatches = html.match(/self\.__next_f\.push\(\[1,"([^"]+)"\]\)/g) || [];
    console.log(`Found ${nextFMatches.length} self.__next_f.push script calls.`);
    
    // Concatenate all __next_f strings and inspect them
    let compiledNextF = "";
    for (const match of nextFMatches) {
      const inner = match.match(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/);
      if (inner && inner[1]) {
        compiledNextF += inner[1].replace(/\\"/g, '"').replace(/\\n/g, '\n');
      }
    }
    console.log("Compiled Next.js metadata length:", compiledNextF.length);
    
    // Look for platform profiles
    const idx = compiledNextF.indexOf("platform");
    if (idx !== -1) {
      console.log("Found 'platform' keyword in compiled Next.js stream. Context:");
      console.log(compiledNextF.substring(idx - 100, idx + 1000));
    } else {
      console.log("Could not find 'platform' keyword in Compiled Next.js stream.");
      // Let's just search for numbers or any JSON-like text
      const gfgIdx = compiledNextF.toLowerCase().indexOf("gfg");
      if (gfgIdx !== -1) {
        console.log("Found 'gfg' at index:", gfgIdx);
        console.log(compiledNextF.substring(gfgIdx - 200, gfgIdx + 800));
      }
    }

    // Is there any JSON array of platforms in the text?
    const totalCountMatch = html.match(/"totalQuestionCounts":\s*(\d+)/g);
    if (totalCountMatch) {
      console.log("Found totalQuestionCounts:", totalCountMatch);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
