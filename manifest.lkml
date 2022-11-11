project_name: "pocCA"

application: pocCA {
<<<<<<< HEAD
  label: "DEV pocCA"
  url: "http://localhost:8080/bundle.js"
  # file: "bundle.js
  entitlements: {
    local_storage: yes
    navigation: yes
    new_window: yes
    use_form_submit: yes
    use_embeds: yes
    core_api_methods: ["all_connections","search_folders", "run_inline_query", "me", "all_looks", "run_look"]
    external_api_urls: []
    oauth2_urls: []
    scoped_user_attributes: []
    global_user_attributes: []
  }
}
=======
  label: "pocCA"
  url: "http://localhost:8080/bundle.js"
  # file: "bundle.js
  entitlements: {
    core_api_methods: ["me"] #Add more entitlements here as you develop new functionality
  }
}
>>>>>>> 7ef84714d31b3c367c6bcecb4168456d2848c8a8
