# Generated by Django 3.2.9 on 2022-03-12 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_player_managers'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='name',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
