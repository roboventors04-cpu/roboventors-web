create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  organization text,
  domain text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Public can submit (anonymous form)
create policy "Anyone can submit contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

-- No one can read by default (admin via service role only)
