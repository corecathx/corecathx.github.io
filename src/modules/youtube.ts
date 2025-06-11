import { parseStringPromise } from "xml2js";

const cat_channel = 'UCQhxUlrUtrMZjeA05sbEMmA';
async function getLatestVideo() {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${cat_channel}`);
    const xml = await res.text();
    const json = await parseStringPromise(xml);

    const latest = json.feed.entry?.[0];

    if (!latest) return null;

    return {
        title: latest.title[0],
        videoId: latest["yt:videoId"][0],
        url: latest.link[0].$.href,
        thumbnail: `https://i3.ytimg.com/vi/${latest["yt:videoId"][0]}/hqdefault.jpg`,
        published: latest.published[0],
    };
}

export {
    getLatestVideo
}