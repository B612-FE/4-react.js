import React, {useState} from 'react';
import './App.css';

function App() {
	const [inputValue, setInputValue] = useState(''); //inputValue 상태변수 생성, 초기값 빈 문자열
	const [todoList, setTodoList] = useState([]);
	const [doneList, setDoneList] = useState([]);

	const addList = () => {
		if (inputValue !== '') {
			setTodoList([...todoList,inputValue]);
			// 새로운 배열을 만들고 todoList 배열 복사 & todoList배열에 inputValue 값 추가
			setInputValue(''); 
			// 빈문자열로 초기화->입력 값 초기화
		}
		else{
			alert("Text is empty!");
			//텍스트가 빈경우 알람 표시
		}
	}

	const checkBtn = (index) => {
		const doneItem = todoList[index]; 
		//배열의 항목 변수에 할당
		setDoneList([...doneList, doneItem]); 
		//새로운 추가된 배열 만들기
		setTodoList(todoList.filter((_,i) => i !== index));
		// todoList 배열에서 해당 인덱스 항목을 제외한 나머지 항목을 필터링하여 새로운 배열 생성
		// setTodoList 사용 상태 업데이트, 즉, 일치하지 않는 인덱스를 가진 요소만 남긴 배열 반환
	}

	const xBtn = (index) => {
		setTodoList(todoList.filter((_,i) => i !== index));
	}

	const XBtn = (index) => {
		setDoneList(doneList.filter((_,i) => i !== index));
	}


 	return (
	<div class="container">
		<div>
			<h1>Things to do</h1>
		</div>
		<div class="add-text">
			<input 
				type="text" 
				value={inputValue}
				placeholder="Enter your to-do" 
				onChange={(e) => setInputValue(e.target.value)}  // 입력필드의 값이 변경될떄 호출되는 이벤트핸들러
				autofocus/>
			<button onClick={addList}>add</button>
		</div>

		<ol class="todo-list">
			<h2>to do</h2>
			{todoList.map((item,index) => (
				//todoList 배열의 모든 항목을 순회하고 각 항목에 대한 렌더링을 생성
				<li key={index}>

					{item}
					<button 
					className="check"
					onClick={() => checkBtn(index)}>
					V</button>
					<button 
						className="delete" 
						onClick={() => xBtn(index)}>
					X</button>
				</li>
			))}
		</ol>

		<ol class="done-list">
			<h2>done</h2>
			{doneList.map((item,index) => (
				<li key={index}>
					{item}
					<button className="delete" onClick={() => XBtn(index)}>X</button>
				</li>
			))}
		</ol>
	</div>

  );
}


export default App;
