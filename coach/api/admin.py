from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

# Register your models here.
class PlayerAdmin(UserAdmin):
    model = Player
    list_display = ['email', 'sport','is_staff','is_active']
    list_filter = ['email', 'sport','is_staff','is_active']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('sport',)}),
        ('Permissions', {'fields': ('is_active','is_staff')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide,'),
            'fields': ('email', 'password1', 'password2', 'sport','is_staff','is_active'),
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(Player, PlayerAdmin)
