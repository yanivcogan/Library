import fetch from 'node-fetch';
import config from './config';
import { withRouter } from "react-router";
import PubSub from "pubsub-js";
import events from "../lib/events";
import React from "react";

const apiPath='api/';
let refetchQueue = [];

function get(path){
	return fetch(config.serverPath+apiPath+path, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
	.then(res => res.json())
	.then(json => {
		return handleResult(json);
	});
}
function post(path, data){
	return fetch(config.serverPath+apiPath+path, {
		method: 'post',
		body: JSON.stringify(data),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
	.then(res => res.json())
	.then(json => {
		return handleResult(json);
	});
}

function handleResult(json){
	const currPosition = encodeURIComponent(window.location.pathname + window.location.search);
	return new Promise((resolve) => {
		if(json && json.error === "missing token")
		{
			alert("missing permissions");
		}
		else if(json && json.error === "missing permissions")
		{
			alert("missing permissions");
		}
		else{
			resolve(json);
		}
	});
}


export default withRouter({
    get,
    post
})
