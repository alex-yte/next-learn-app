import { useGlobalContext } from "../context/GlobalContext";

export default function DashboardPage() {
  const { user } = useGlobalContext();

  if (user.role !== "admin") {
    return (
      <main>
        <h1>Доступ запрещен</h1>
        <p>Вы не являетесь администратором.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Админ-панель</h1>
      <p>Управление постами, настройками и пользователями.</p>
    </main>
  );
}
