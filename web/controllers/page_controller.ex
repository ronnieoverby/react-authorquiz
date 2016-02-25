defmodule Authorquiz.PageController do
  use Authorquiz.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
