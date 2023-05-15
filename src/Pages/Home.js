import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<p> Home 페이지 입니다. </p>
			<Link to="/postview/0001">
				<p> 0001 포스트로 이동 </p>
			</Link>
			<Link to="/postview/0002">
				<p> 0002 포스트로 이동 </p>
			</Link>
		</div>
	);
}

export default Home;