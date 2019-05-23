class PostCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title, 
    :production_type,
    :paid,
    :union,
    :created_at,
    :updated_at
  )

end
