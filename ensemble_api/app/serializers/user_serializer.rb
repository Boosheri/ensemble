class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes(
  :id, 
  :first_name, 
  :last_name, 
  :full_name,
  :updated_at,
  :created_at,
  :profile,
  # :headshot
  )

  def headshot
    object.headshot_attachments.includes(:blob).map do |attachment|
      {
        id: attachment.id,
        name: attachment.name,
        content_type: attachment.blob.content_type,
        filename: attachment.blob.filename.to_s,
        url: rails_blob_url(attachment)
      }
    end
  end
end
