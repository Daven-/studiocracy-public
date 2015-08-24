class Post < ActiveRecord::Base

  # Markdown
  #before_save { MarkdownWriter.update_html(self) }
  acts_as_commentable
  acts_as_votable
  
  has_attached_file :image,
                    styles: { small: "64x64", med: "300x300", large: "500x500" },
                    :default_url => '/assets/test.png'

  # Validations
  validates :title, presence: true, length: { maximum: 100 }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]

  # Pagination
  paginates_per 30

  # Relations
  belongs_to :user
  has_many :tags
  accepts_nested_attributes_for :tags

  # Scopes
  scope :published, lambda {
    where(draft: false)
    .order("updated_at DESC")
  }

  scope :drafted, lambda {
    where(draft: true)
    .order("updated_at DESC")
  }

  attr_reader :votecount, :netvotes

  def netvotes
    get_likes.count - get_dislikes.count
  end

  def votecount
    #Ranking algorithm:
    # (Upvotes/((minutes since posted + 2)^1.8)) - (Miniscule value to break ties between 0 upvote posts)
    (((((netvotes))/((((Time.zone.now - created_at) / 60).round + 2) ** 1.8))) - ((Time.zone.now-created_at)/(157788000 ** 10)))
  end


end
