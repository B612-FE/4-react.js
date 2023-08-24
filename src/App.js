import React, {useState} from 'react';
import './App.css';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [doneList, setDoneList] = useState([]);

	const addList = () => {
		if (inputValue !== '') {
			setTodoList([...todoList,inputValue]);
			// 새로운 배열을 만들고 복사 & todoItems배열에 inputValue 값 추가
			setInputValue(''); 
			// 빈문자열로 초기화->입력 값 초기화
		}
		else{
			alert("Text is empty!");
		}
	}

	const checkBtn = (index) => {
		const doneItem = todoList[index];
		setDoneList([...doneList, doneItem]);
		setTodoList(todoList.filter((_,i) => i !== index));
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
				onChange={(e) => setInputValue(e.target.value)} 
				autofocus/>
			<button onClick={addList}>add</button>
		</div>

		<ol class="todo-list">
			<h2>to do</h2>
			{todoList.map((item,index) => (
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