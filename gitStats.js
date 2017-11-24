"use strict";

var repo = "omergulcicek/turkuazcss";
var username, commit, percent, totalCommits = 0;
var githubPercent = {};
var myObj;

function gitHub(username, commit, percent)
{
    this.username = username;
    this.commit = commit;
    this.percent = percent;
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", "https://api.github.com/repos/" + repo + "/contributors", true);
xmlhttp.send();

Array.prototype.forEach.call(myObj, function(el, i)
{
	totalCommits += el.contributions;
});

Array.prototype.forEach.call(myObj, function(el, i)
{
	username = el.login;
	commit = el.contributions;
	percent = parseFloat(commit / totalCommits * 100).toFixed(2);
	githubPercent[i] = new gitHub(username, commit, percent);
});

console.table(githubPercent);
