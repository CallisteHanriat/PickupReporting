import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';

@Component({
	selector: 'app-list-users',
	templateUrl: './list-users.component.html',
	styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
	users: User[] = [];
	jsonReceived : any;
	constructor() { }

	set_jsonReceived(json) {
			this.jsonReceived = json;
			this.after_json_received();
	}

	ngOnInit() {
		var self = this;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/user');
		xhr.onload = function() {
			if (xhr.status === 200) {
				console.log('User\'s name is ' + xhr.responseText);
				self.set_jsonReceived(JSON.parse(xhr.response));
				/*console.log("jsonReceived = " + jsonReceived);
				console.log("jsonReceived.data = " + jsonReceived.data);
				console.log("jsonReceived.data.id = " + jsonReceived.data.id);
				console.log("jsonReceived.data[0]['_id'] = " + jsonReceived.data[0]["_id"]);
				console.log("jsonReceived.data[0]['name'] = " + jsonReceived.data[0]["name"]);
				console.log("JSON.stringify(jsonReceived.data) = " + JSON.stringify(jsonReceived.data));*/
				//console.log("JSON.stringify(jsonReceived.data)['_id'] = " + JSON.stringify(self.jsonReceived.data[0]["_id"]));
			}
			else {
				alert('Request failed.  Returned status of ' + xhr.status);
			}
		};
		xhr.send();
	}

	after_json_received() {
		console.log("objet : " + this.jsonReceived);
		console.log("id premier user : " + this.jsonReceived.data[0]["_id"]);
		for (var i = 0; i < Object.keys(this.jsonReceived.data).length ; i++) {
			console.log("push de " + this.jsonReceived.data[i]["name"]);
			this.users.push(new User(this.jsonReceived.data[i]["_id"], this.jsonReceived.data[i]["name"]));
		}
		for (let entry of this.users) {
			console.log("user " + entry.name + " founded in database");
		}
	}

}
