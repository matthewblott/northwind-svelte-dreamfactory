<script>
	import { Save, Delete, Edit } from 'lucide-svelte'
</script>

<h1>Customers</h1>
<div>
	<a href="#" role="button" disabled="" class="disabled s-eKNMiEDm57_t">First</a>
	<a href="#" role="button" disabled="" class="disabled s-eKNMiEDm57_t">Previous</a>
	<a role="button" href="#" class="s-eKNMiEDm57_t">Next</a>
	<a role="button" href="#" class="s-eKNMiEDm57_t">Last</a>
</div>

<nav class="s-eKNMiEDm57_t">
	<ul class="s-eKNMiEDm57_t">
		<li class="s-eKNMiEDm57_t">
			<a href="#" role="button" disabled="" class="disabled s-eKNMiEDm57_t">First</a>
		</li>
		<li class="s-eKNMiEDm57_t">
			<a href="#" role="button" disabled="" class="disabled s-eKNMiEDm57_t">Previous</a>
		</li>
		<li class="s-eKNMiEDm57_t"><a role="button" href="#" class="s-eKNMiEDm57_t">Next</a></li>
		<li class="s-eKNMiEDm57_t"><a role="button" href="#" class="s-eKNMiEDm57_t">Last</a></li>
		<li class="s-eKNMiEDm57_t">
			<a href="#" role="button">
				<Save />
				Save</a
			>
		</li>
	</ul>
	<ul>
		<li>
			<a href="#" role="button"> <Save />Save</a>
		</li>
	</ul>
</nav>

<nav>
	<a href="#" role="button"> Save</a>
</nav>

<!-- <a href="#" role="button"> Save</a> -->

<table role="grid">
	<thead>
		<th scope="col">Id</th>
		<th scope="col">Name</th>
		<th>
			<a href="/customers/new"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide-icon lucide lucide-plus-square"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
					<line x1="12" y1="8" x2="12" y2="16" />
					<line x1="8" y1="12" x2="16" y2="12" />
				</svg></a
			>
		</th>
	</thead>
	<tbody>
		<tr>
			<th scope="row">ALFKI</th>
			<td>Alfreds Futterkiste</td>
			<td>
				<a href="/customers/ALFKI"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">ANATR</th>
			<td>Ana Trujillo Emparedados y helados</td>
			<td>
				<a href="/customers/ANATR"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">ANTON</th>
			<td>Antonio Moreno Taquería</td>
			<td>
				<a href="/customers/ANTON"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">AROUT</th>
			<td>Around the Horn</td>
			<td>
				<a href="/customers/AROUT"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">BERGS</th>
			<td>Berglunds snabbköp</td>
			<td>
				<a href="/customers/BERGS"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">BLAUS</th>
			<td>Blauer See Delikatessen</td>
			<td>
				<a href="/customers/BLAUS"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">BLONP</th>
			<td>Blondesddsl père et fils</td>
			<td>
				<a href="/customers/BLONP"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">BOLID</th>
			<td>Bólido Comidas preparadas</td>
			<td>
				<a href="/customers/BOLID"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">BONAP</th>
			<td>Bon App</td>
			<td>
				<a href="/customers/BONAP"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
		<tr>
			<th scope="row">BOTTM</th>
			<td>Bottom-Dollar Markets</td>
			<td>
				<a href="/customers/BOTTM"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-edit"
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg></a
				>
			</td>
		</tr>
	</tbody>
</table>
<!--<+page>-->
