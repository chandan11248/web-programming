from django.urls import path
from store import views

urlpatterns = [
    path("", views.home),
    path("add-product/", views.add_product),
    path("retrieve-product/", views.retrieve_product),
    path("update-product/<int:product_id>/", views.update_product),
    path("delete-product/<int:product_id>/", views.delete_product),
]
