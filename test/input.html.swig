<h1>{{ title }}</h1>

<ul>
{% for person in people %}
<li>{{ person.name }} age {{ person.age }}</li>
{% endfor %}
</ul>
