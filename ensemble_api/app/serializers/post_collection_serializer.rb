class PostCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title, 
    :production_type,
    :gender,
    :min_age,
    :max_age,
    :paid,
    :union,
    :roles,
    :created_at,
    :updated_at
  )

end
