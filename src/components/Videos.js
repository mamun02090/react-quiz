import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  console.log(videos);
  console.log(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
          {console.log(page)}
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  id={video.youtubeID}
                  title={video.title}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video id={video.youtubeID} title={video.title} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && (
        <div className="error">No Data Found</div>
      )}
      {error && (
        <div className="error">An error Occured when fetching data..</div>
      )}
      {loading && <div>Loading videos...</div>}
    </div>
  );
}
