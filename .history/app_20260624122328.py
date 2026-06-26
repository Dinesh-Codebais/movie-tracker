from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)
def create_database():

    conn = sqlite3.connect("movies.db")

    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        rating REAL NOT NULL
    )
    """)

    conn.commit()
    conn.close()

@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    create_database()
    app.run(debug=True)
