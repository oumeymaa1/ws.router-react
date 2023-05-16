import { Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rating = ({rating,setRating,MovieRating, isMovieRating }) => {
  const handleChange = (value) => {
    setRating(value);
  };
  return isMovieRating ?(
    <span>
      <Rate disabled value={MovieRating} />
    </span>
  ) : (
    <span>
        <Rate tooltips={desc} onChange={handleChange} value={rating}/>
    </span>
  );
};
export default Rating;