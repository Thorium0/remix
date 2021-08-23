#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::SystemTray;

fn main() {
	let tray = SystemTray::new();
  	tauri::Builder::default()
//   	.menu(menu)
	  .system_tray(tray)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
