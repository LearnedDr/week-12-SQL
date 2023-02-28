select e.id, e.first_name,e.last_name,e.role_id,r.title,r.salary,r.department_id,d.name,
m.first_name,m.last_name from employees e left join roles r on e.role_id = r.id left join departments d on r.department_id = d.id
left join employees m on e.manager_id = m.id;