module.exports = {
	plugins:[
		// "@semantic-release/commit-analyzer",
		// "@semantic-release/release-notes-generator",
		// "@semantic-release/changelog",
		["@semantic-release/github",{
			"assets":[
				{"path":"src-tauri/target/bundle/dmg/*.dmg","label":"Dmg distribution"},
				{"path":"src-tauri/target/bundle/osx/*.app","label":"App distribution"},
			]
		}],
		// "@semantic-release/git",
	]
}
