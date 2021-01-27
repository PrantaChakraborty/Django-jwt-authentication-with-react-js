from rest_framework_simplejwt.serializers import TokenObtainSerializer


class MyTokenObtainPairSerializer(TokenObtainSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # add custom claims. For sending 'age(extra fields in user model)' in token
        token['age'] = user.age
        return token
