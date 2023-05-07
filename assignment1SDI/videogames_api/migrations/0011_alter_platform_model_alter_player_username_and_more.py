# Generated by Django 4.1.7 on 2023-03-12 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videogames_api', '0010_remove_platform_user_remove_player_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='platform',
            name='model',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='username',
            field=models.CharField(max_length=10, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='videogame',
            name='name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]