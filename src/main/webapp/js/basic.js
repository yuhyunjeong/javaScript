//여기서부터는 자바스크립트영역(대소문자 정확하게 구분한다.)
	/*
		한 문장의 끝은 ;로 끝낸다.
		만약, 개행을 하면 ;역할을 대신해준다.
		script영역에서 html, css코드 모두 가능하다.
		
	*/
	
	//화면(브라우저)에 출력
	document.write("<h3 style='color:red'>안녕하세요.</h3>");
	
	//마우스를 올렸을때
	function test1(th){ // th는 this 전달됨
		//alert("마우스 올렸니??");
	
		//alert(th)
		console.log("th = "+ th);
		th.style.border="double 5px red";
		th.style.fontFamily="궁서체";
		
	}
	
	//마우스를 out했을때
	function test2(th){
		th.style.border="none";
	}
	