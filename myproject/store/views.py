from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404

from store import forms
from store.models import Product

# Create your views here.
def home(request):
    products = Product.objects.all()
    context_dict = {
        'products': products
    }
    return render(request, 'store.html', context_dict)

def add_product(request):
    if request.method == 'POST':
        product = Product.objects.create(
            name = request.POST['name'],
            price = request.POST['price'],
            stock = request.POST['stock']
        )
        
    product_form = forms.ProductForm()
    context_dict = {
        'product_form': product_form
    }
    return render(request, 'add_product.html', context_dict)

def retrieve_product(request):
    product = None
    searched = False
    
    if request.method == 'POST':
        product_name = request.POST.get('name', '')
        searched = True
        try:
            product = Product.objects.get(name=product_name)
        except Product.DoesNotExist:
            product = None
    
    context_dict = {
        'product': product,
        'searched': searched
    }
    return render(request, 'retrieve_product.html', context_dict)

def update_product(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    
    if request.method == 'POST':
        product.name = request.POST['name']
        product.price = request.POST['price']
        product.stock = request.POST['stock']
        product.save()
        return redirect('/store/')
    
    product_form = forms.ProductForm(instance=product)
    context_dict = {
        'product_form': product_form,
        'product': product
    }
    return render(request, 'update_product.html', context_dict)

def delete_product(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    
    if request.method == 'POST':
        product.delete()
        return redirect('/store/')
    
    context_dict = {
        'product': product
    }
    return render(request, 'delete_product.html', context_dict)
    