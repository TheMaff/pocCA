project_name: "pocCA"

application: pocCA {
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