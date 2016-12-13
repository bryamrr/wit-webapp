class PublicController < ApplicationController
  def home
    courses = Course.where(starred: true)
  end

  def money
  end

  def certificates
  end

  def register
  end

  def welcome
  end

  def login
  end
end
