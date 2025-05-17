// 3. 먼저 버튼기능 없이 바로 조회가 되게 구현해보자!

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUsers = async () => {
	const response = await axios.get(
		"https://api.atsopt-seminar4.site/api/v1/users",
	);

	return response.data.data;
};

function App() {
	const { data, isPending } = useQuery({
		queryKey: ["users"],
		queryFn: getUsers,
	});

	if (isPending) return <div>로딩 중...</div>;

	return (
		<div>
			<h1>유저 목록</h1>

			{data?.nicknameList.map((nickname: string, index: number) => (
				<div key={index}>
					<h2>{nickname}</h2>
				</div>
			))}
		</div>
	);
}

export default App;
