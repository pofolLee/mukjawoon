
import React, { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';

class signUp extends Component {

    /* 회원가입 시 필요한 데이터 */
    state = {
        id: '',
        pw: '',
        name: ''
    }

    /* input 데이터 바인딩 */
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    /* 회원가입 진행 */
    singUp = (text) => {
        console.log(text);
        console.log(`${this.state.id}, ${this.state.pw}, ${this.state.name}`);
    }

    /* 렌더링 내용 */
    render() {
        return (
            <div>
                
                <Link href='/'>
                    <a>홈으로</a>
                </Link>
                <br /><br /><br />

                <h2>회원가입 화면</h2>

                아이디 : <input type='text' name='id' placeholder='사용할 아이디를 입력해주세요.' value={this.state.id} onChange={this.handleChange}/>
                <br /><br />
                비밀번호 : <input type='password' name='pw' placeholder='사용할 비밀번호를 입력해주세요.' value={this.state.pw} onChange={this.handleChange}/>
                <br /><br />
                이름 : <input type='text' name='name' placeholder='이름을 입력해주세요.' value={this.state.name} onChange={this.handleChange}/>
                <br /><br />

                <input type='submit' value='가입하기' onClick={this.singUp}/>
            </div>
        )
    }
}

export default signUp;