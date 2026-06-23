import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку на бронирование катера на почту forsage.plus@mail.ru"""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    tour = body.get("tour", "").strip()
    date = body.get("date", "").strip()
    comment = body.get("comment", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    to_email = "forsage.plus@mail.ru"
    smtp_password = os.environ.get("SMTP_PASSWORD", "")

    subject = f"Новая заявка на катер — {name}"
    text = f"""
Новая заявка на бронирование катера по Юмагузинскому водохранилищу!

Имя: {name}
Телефон: {phone}
Маршрут: {tour or 'не указан'}
Дата: {date or 'не указана'}
Комментарий: {comment or 'нет'}
"""

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = to_email
    msg["To"] = to_email
    msg.attach(MIMEText(text, "plain", "utf-8"))

    with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
        server.login(to_email, smtp_password)
        server.sendmail(to_email, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True}),
    }