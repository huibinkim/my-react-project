import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styles from "./Detail.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetail] = useState([]);
  // console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>로딩중</h1>
      ) : (
        <div>
          <Button>
            <Link to={`/`}>Go home</Link>
          </Button>
          <div>
            <h1>{details.title}</h1>
            <img src={details.background_image_original} />

            <h2>
              {details.genres} ({details.year}년) : {details.rating}
            </h2>
            <p>{details.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
//useParam 은 리액트 라우터에서 제공하는 함수.
//이 함수를 사용하면 react router는 Route path의 변수값을 넘겨준다.
