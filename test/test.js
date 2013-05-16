var should = require("should"),
    playlist = require("../playlist"),
    _ = require("underscore");


describe("Playlist module",function (){
	
	describe("#clear", function (){
		it("clears playlist", function (){
			playlist.add("foo");
			playlist.list().length.should.not.equal(0);
			playlist.clear();
			playlist.list().length.should.equal(0);
		});
	});
	
	beforeEach(function (){
		playlist.clear();
	});
	
	describe("#add", function (){
		it("adds new item to the end of the playlist", function (){
	        playlist.add("bar");
	        playlist.add("test");
	        _.last(playlist.list()).should.equal("test");
		});
	});
	
	describe("#list", function (){
		it("returns list of added items", function (){
	        playlist.add("bar");
	        playlist.add("test");
	        playlist.list().should.eql(["bar","test"]);
	        playlist.list().should.not.eql(["test","bar"]);
		});
	});
	
	describe("#current", function (){
		it("returns undefined if there are no items to play", function(){
			should.strictEqual(playlist.current(),undefined);
		});
		it("returns the first item not yet played", function() {
			playlist.add("bar");
	        playlist.add("test");
	        playlist.current().should.equal("bar");
		});
	});
	
	describe("#pop", function (){
		it("removes first item", function (){
			playlist.add("foo");
			playlist.add("paari");
			playlist.pop();
		});
	});
	
});