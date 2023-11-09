import request from "./request.js";


function login (data){
	return request.get('/app/user/appletLogin',data);
}

function myChatRoom (data){
	return request.get('/module/room/myChatRoom',data);
}

function chatLog (data){
	return request.get('/module/room/chatLog',data);
}

export default {
	login,//登录
	myChatRoom,//我的聊天室
	chatLog,//聊天室序列号查询聊天记录
}