json.extract! messenger, :id, :title, :message_id, :created_at, :updated_at
json.url messenger_url(messenger, format: :json)
