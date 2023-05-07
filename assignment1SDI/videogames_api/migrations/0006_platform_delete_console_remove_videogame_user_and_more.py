# Generated by Django 4.1.7 on 2023-03-12 17:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('videogames_api', '0005_console_player'),
    ]

    operations = [
        migrations.CreateModel(
            name='Platform',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('model', models.CharField(max_length=20)),
                ('activeUsers', models.PositiveIntegerField(null=True)),
                ('screen', models.BooleanField(default=True)),
                ('handheld', models.BooleanField(default=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Console',
        ),
        migrations.RemoveField(
            model_name='videogame',
            name='user',
        ),
        migrations.AddField(
            model_name='player',
            name='age',
            field=models.PositiveSmallIntegerField(default=18),
        ),
        migrations.AddField(
            model_name='player',
            name='email',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='favouriteGenre',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='gender',
            field=models.CharField(default='NB', max_length=2),
        ),
        migrations.AddField(
            model_name='player',
            name='username',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='videogame',
            name='platform',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='videogames_api.platform'),
        ),
    ]
