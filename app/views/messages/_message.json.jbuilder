json.extract! message, :id, :title, :project_id, :created_at, :updated_at
json.url message_url(message, format: :json)
