# FileSystem.ts

新アーキテクチャ(自作) 勉強用 疑似ファイルシステム

型は依存の方向を限定しない Model = Controller = Application Model = Application

**Model** を生成し、**Controller** に渡す。

**Model**, **Controller** は **Application** に干渉できる。

ユーザーは **Model** と **Controller** にのみ干渉できる。
