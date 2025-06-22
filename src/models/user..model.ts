export interface User {
  id: string
  name: string
  username: string
  avatar?: string
  title?: string
  bio?: string
  email?: string
  phone?: string
  website?: string
  location?: string
  posts: number
  followers: number
  following: number
}

export interface Post {
  id: string
  user: User
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  timestamp: string
  isLiked?: boolean
}

export interface Notification {
  id: string
  type: string
  user: User
  message: string
  time: string
  unread: boolean
}
