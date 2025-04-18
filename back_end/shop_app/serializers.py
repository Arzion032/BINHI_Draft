from rest_framework import serializers
from .models import Product, Cart, CartItem

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
class DetailedProductSerializer(serializers.ModelSerializer):
    similar_products = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'
        extra_fields = ['similar_products']

        
    def get_similar_products(self, product):
        products = Product.objects.filter(category=product.category).exclude(id=product.id)
        serializer = ProductSerializer(products, many=True)
        return serializer.data

class CartSerializier(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'cart_code', 'created_at', 'modified_at']
        
class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    cart = CartSerializier(read_only=True)
    class Meta:
        model = CartItem
        fields = ['id', 'cart', 'product', 'quantity']
        
class SimpleCartSerializer(serializers.ModelSerializer):
    num_of_items = serializers.SerializerMethodField()
    class Meta: 
        model = Cart
        fields = ["id", "cart_code", "num_of_items"]

    def get_num_of_items(self, cart):
        num_of_items = sum([item.quantity for item in cart.items.all()])
        return num_of_items
    
    