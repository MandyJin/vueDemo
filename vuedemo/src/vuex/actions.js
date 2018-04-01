import axios from 'axios';

export const getuserInfo = ({commit}) => {

	axios.get('/userInfo?t='+Math.random()).then((data)=>{
		if(data){
			let obj = data.data.data;
			console.log(obj)
			commit('userinfo',obj)
		}
	})

};
